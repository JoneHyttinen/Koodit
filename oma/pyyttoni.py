leaves = 3
light = 1
water = 1

for day in range(3):
  leaves = leaves + light 
  leaves = leaves + water
  if leaves > 8:
    leaves += 2
    print("Growth spurt!")
  print("Leaves:", leaves)