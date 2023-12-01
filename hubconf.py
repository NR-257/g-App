# YOLOv5 🚀 by Ultralytics, GPL-3.0 license
"""
PyTorch Hub models https://pytorch.org/hub/ultralytics_yolov5/

Usage:
    import torch
    model = torch.hub.load('ultralytics/yolov5', 'yolov5s')
    model = torch.hub.load('ultralytics/yolov5:master', 'custom', 'path/to/yolov5s.onnx')  # file from branch
"""

import torch
# hubconf.py

dependencies = ['torch']

def best4(pretrained=True, **kwargs):
    # This function should return the model
    # You can load your model using any logic you need
    # For simplicity, assuming the model is a torchvision model
    return torch.load('NR-257/g-App/best4.pt', map_location='cpu')