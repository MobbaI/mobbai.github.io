## Test Case

编写测试类

first_demo.py

```python
class TestCaseName(unittest.TestCase):
    # 须使用@classmethod装饰器
    @classmethod
    def setUpClass(cls):
        print('仅case开始时执行一次')
	
    @classmethod
    def tearDownClass(cls):
        print('仅case结束时执行一次')
	
    def setUp(self):
        print('用例开始时执行')
	
    def tearDown(self):
        print('用例结束时执行')
	
    def test_name_01(self):
        print('测试用例，以test开头命名')
        
    def test_name_02(self):
        pass
```



## Test Suite

添加测试用例至测试套件

```python
# 创建suite实例
suite = unittest.TestSuite()
# 添加单条测试用例
suite.addTest(TestCaseName('test_name_01'))
# 添加多条测试用例
suite.addTests([TestCaseName('test_name_01'), TestCaseName('test_name_02')])

# 创建suite实例时，可直接传入用例
# suite = unittest.TestSuit(map(TestCaseName, ['test_name_01', 'test_name_02']))
```



## Test Loader

TestLoader这个类下，封装了5种组织用例的方法

> 5种方法的返回值，都为TestSuite对象

```python
loader = unittest.TestLoader()
```



### 加载测试类中的用例

传入整个类内的测试用例

```python
suite = loader.loadTestsFromTestCase(TestCaseName)
```



### 加载模块中的测试用例

传入整个模块内的测试用例

```python
import module_name

suite = loader.loadTestsFromModule(module_name)
```



### 加载指定的单个测试用例

```python
# 参数为module_name.TestCaseName.test_name
# 在sys.path里面的路径去寻找测试模块

suite = loader.loadTestsFromName('first_demo.TestCaseName.test_name_01')
```



### 加载指定的多个测试用例

```python
suite = loader.loadTestsFromNames(['first_demo.TestCaseName.test_name_01', ])
```



### 加载指定目录下所有的测试用例

传入指定路径下，多个脚本文件内的测试用例

```python
# discover 可以一次调用多个脚本
# test_dir 被测试脚本的路径
# pattern 脚本名称匹配规则

test_dir = '.'
# 默认pattern='test*.py'，返回值为TestSuit对象
discover = unittest.defaultTestLoader.discover(test_dir, pattern='first_*.py')
```



## Decorator

**跳过测试**

@unittest.skip(reason)

@unittest.skipIf(condition, reason)

@unittest.skipUnless(condition, reason)

**失败不计入**

@unittest.expectedFailure



## 执行测试用例

根据类名字符大小排序，类内方法名同理

```python
unittest.main()
```

根据添加顺序，依次执行

> 若添加类、模块或路径时，内部仍按字符大小排序

```python
runner = unittest.TextTestRunner()
runner.run(suite)
```

