## 单个装饰器

### 非参

创建装饰器，并使用

```python
def say(func):    
    def wrapper(*args, **kwargs):
        print('before')
        func(*args, **kwargs)
        print('after')        
    return wrapper


@say
def add(a, b):
    print(a + b)


add(1, 2)
# before
# 3
# after
```

"@"是Python的语法糖，它的作用类似于

```python
add = say(add)
```

### 带参

带参数的装饰器

```python
def say(params):
    def _say(func):
        def wrapper(*args, **kwargs):
            print(f'date: {params}')
            print('before')
            func(*args, **kwargs)
            print('after')        
        return wrapper
    return _say


@say('20220124')
def add(a, b):
    print(a + b)


add(1, 2)
# date: 20220124
# before
# 3
# after
```

## 多个装饰器

```python
def say_0(func):
    print('say_0')

    def wrapper(*args, **kwargs):
        print('before_0')
        func(*args, **kwargs)
        print('after_0')
    return wrapper


def say_1(func):
    print('say_1')

    def wrapper(*args, **kwargs):
        print('before_1')
        func(*args, **kwargs)
        print('after_1')
    return wrapper


@say_0
@say_1
def add(a, b):
    print(a + b)


print('---------')
add(1, 2)
# say_1
# say_0
# ---------
# before_0
# before_1
# 3
# after_1
# after_0
```

**执行顺序**

定义阶段已执行

> 由内而外

```python
add = say_0(say_1(add))

# say_1
# say_0
```

调用时执行

> 外内外

```python
# before_0
# before_1
# 3
# after_1
# after_0
```

## functools.wraps

使用装饰器后，生成同名新函数，其拥有的属性和原函数不同

需要伪装成与原函数相同

```python
import functools


# 未使用
def say_0(func):
    def wrapper(*args, **kwargs):
        """say in"""
        print('before')
        func(*args, **kwargs)
        print('after')        
    return wrapper


# 使用
def say_1(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        """say in"""
        print('before')
        func(*args, **kwargs)
        print('after')        
    return wrapper


@say_0
def add_0(a, b):
    """求和函数"""
    print(a + b)

    
@say_1
def add_1(a, b):
    """求和函数"""
    print(a + b)


print(add_0)
print(add_0.__name__)
print(add_0.__doc__)
# <function say_0.<locals>.wrapper at 0x00000217F888C160>
# wrapper
# say in
print(add_1)
print(add_1.__name__)
print(add_1.__doc__)
# <function add_1 at 0x00000217F888C280>
# add_1
# 求和函数
```

