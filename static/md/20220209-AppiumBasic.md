## 自动化环境

### Appium Server

下载安装Appium Desktop

### Java

**环境变量**

JAVA_HOME，%JAVA_HOME%\bin

> 建议使用JDK1.8

### Android SDK

**环境变量**

ANDROID_HOME，%ANDROID_HOME%\tools

**adb**

android-sdk-windows/platform-tools/adb.exe

**uiautomatorviewer**

元素定位工具

android-sdk-windows/tools/uiautomatorviewer.bat

### 环境检测

检测环境是否就绪，红框为未正确配置

```
npm install appium-doctor -g

appium-doctor
```

## 获取元素

根据uiautomatorviewer工具内元素树状图，获取所需元素

### 常用方法

```python
find_element(by=Appium.ID, value=id_)

"""
以下常用方法，皆依靠上述实现
ID/XPATH/NAME/CLASS_NAME/ANDROUD_UIAUTOMATOR
"""

find_element_by_id()
find_element_by_xpath()
find_element_by_name()
find_element_by_class_name()
# [Deprecated] Please use 'find_element' with 'AppiumBy.ANDROID_UIAUTOMATOR' instead.
find_element_by_android_uiautomator()
```

### ANDROUD_UIAUTOMATOR

```python
find_element(by=Appium.ANDROUD_UIAUTOMATOR, value=uia_string)
```

uia_string常用示例如下

**text**

```python
new UiSelector().text("text文本")
new UiSelector().textContains("包含text文本")
new UiSelector().textStartsWith("以text文本开头")
new UiSelector().textMatches("正则表达式")
```

**resourceId**

```python
new UiSelector().resourceId("id")
```

**className**

```python
new UiSelector().className("className")
```

**description**

```python
new UiSelector().description("contenet-des属性")
```

**childSelector**

父元素下找子元素

```python
new UiSelector().resourceId("id_p").childSelector(new UiSelector().resourceId("id_c"))
```

**fromParent**

通过兄弟元素，找同一父级元素下的子元素

```python
new UiSelector().resourceId("id_1").fromParent(new UiSelector().text("text_2"))
```

**滚动**

滚动某元素的父容器，直到其可见

```python
new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("xxx"))
```

