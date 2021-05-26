class Solution:
    def reverse(self, x: int) -> int:
        if x < 0:
            y =  (-1) * int(str(-x)[::-1])
        else:
            y = int(str(x)[::-1])
        
        # 不要忘记判断越界
        if y>2147483648 or y< -2147483648:
            y = 0
        return y
