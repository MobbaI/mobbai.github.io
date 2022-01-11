## 整体流程

```python
# 安装
pip install pyinstaller
# 以其中一个py文件生成spec文件
pyi-makespc xxx.py
# 再生成exe文件
pyinstaller xxx.spec
```

## spec文件配置

```
a = Analysis(['1.py', '2.py', '3.py'],
             pathex=['E:\\path'],
             datas=[('1.png', '.'), ('2.qss', '.')])                          
exe = EXE(icon='icon.ico')
```

上述分别为：py文件，根目录，资源文件，打包后图标icon（其他默认参数已省略）
