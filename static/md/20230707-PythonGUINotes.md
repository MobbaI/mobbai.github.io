配置

QSettings

```python
from PySide6.QtCore import QSettings

self.ini = QSettings('.\\ini_name.ini', QSettings.IniFormat)
parameter_value = self.ini.value('section_name/parameter_name')
self.ini.setValue('section_name/parameter_name', parameter_value_new)
```




