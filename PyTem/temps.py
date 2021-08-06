def tuple_test(x, y):
	x += 1
	y += 1
	return x , y

tuple_test(1,2)

if __name__ == "__main__":
    import sys
    tuple_test(int(sys.argv[1]))