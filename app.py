from flask import Flask, render_template, request, redirect
from PIL import Image
import io
import datetime
import argparse
import torch


app = Flask(__name__)
model = None
gn = []

DATETIME_FORMAT = "%Y-%m-%d_%H-%M-%S-%f"

labels_dict = {
    "Clear plastic bottle": "ペットボトル",
    "Drink can": "空き缶",
    "Glass bottle": "びん",
    "Cloth": "衣類",
    "Newspaper": "新聞紙",
    "Plastic container": "プラスチック容器",
    "Plastic bag": "プラスチックバッグ",
    "Cardboard": "ダンボール",
    "Battery": "電池",
}

def load_yolov5_model():
    model = torch.hub.load(
        'ultralytics/yolov5',
        'yolov5s.pt',
        pretrained=True,
        force_reload=True,
        trust_repo=True
    )
    model.eval()

def predict_internal(file):
    img_bytes = file.read()
    img_orig = Image.open(io.BytesIO(img_bytes))
    gn.clear()
    img_resized = img_orig.resize((640, 640))
    model.conf = 0.45
    results = model(img_resized)
    obj = results.pandas().xyxy[0]
    name = set(obj.name)
    for i in name:
        gn.append(labels_dict[i])

    results.render()
    resized_img = Image.fromarray(results.imgs[0]).resize(img_orig.size)

    now_time = datetime.datetime.now().strftime(DATETIME_FORMAT)
    img_savename = f"static/image/{now_time}.png"
    resized_img.save(img_savename)

    return img_savename

@app.route('/home')
def home():
    return render_template('index.html')

@app.route("/", methods=["GET", "POST"])
def predict():
    if request.method == "POST":
        if "file" not in request.files:
            return redirect(request.url)
        file = request.files["file"]
        if not file:
            return

        img_savename = predict_internal(file)

        return render_template('detect.html', upload_img=img_savename, garbage_name=gn)

    return render_template("index.html")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Flask app exposing yolov5 models")
    parser.add_argument("--port", default=5000, type=int, help="port number")
    args = parser.parse_args()

    # モデルを読み込む（一度だけ）
    load_yolov5_model()

    # アプリケーションを起動
    app.run(port=args.port, debug=True)