# Hashuery

A JavaScript library to parse query in URL's Hash.

Example:
-------

When URL looks like:

```
http://example.com/#this=hash&data=anything
```

Would be returned as a JavaScript object:

```javascript
{
    "this": "hash",
    "data": "anything"
}
```


Usage
-----

 Initialize:
```javascript
var hash = new hashuery();
```

Getting the current value:
```javascript
var current = hash.get();
```

Setting a new value:
```javascript
hash.set({
    "foo": "bar"
});
```

Append data instaed of setting:
```javascript
hash.append({
    "baz": "bar"
});
```

Clear URL
```javascript
hash.clear();
```

Events:
------

It has two events:

```javascript
.onChange(function(newHash){}) // pass the function to be called when hash changes
```
and
```javascript
.onClear(function(){}) // pass the function to be called when hash is cleared
```

