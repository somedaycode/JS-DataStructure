## 복잡도

### 시간 복잡도

| 접근 | 탐색 | 삽입 | 삭제 |
| :--: | :--: | :--: | :--: |
| O(n) | O(n) | O(1) | O(1) |

### 공간 복잡도

O(n)

## 구현하면서 헷갈리던 부분

```js
if (this.head === null) {
  this.head = newNode;
  this.tail = newNode;
} else {
  // 이게 왜 head.next로 들어가지?
  this.tail.next = newNode;
}
this.tail = newNode;
```

헷갈리던 부분은 `head`에 이미 값이 있을 때 `tail.next`에 새로운 노드를 넣어주고, `tail`에 새로운 노드를 한번 더 추가하는 것이다.

너무나 기초적인 부분을 헷갈리고 있었다.

같은 newNode를 참조하고 있는 tail의 next값이 할당되면 head.next 또한 그 값을 가지게 되는 것

계속 `console.log`를 찍어보며 이해하는 데 꽤나 시간이 걸렸다.

참고링크 : https://forum.freecodecamp.org/t/pushing-on-a-linked-list-this-tail-next/426388/3
