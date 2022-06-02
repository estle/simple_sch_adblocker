f1 = open("rawurls.txt", 'r')
f = list(f1.read().split())
f1.close()
l = []
for i in range (len(f)):
    l.append(f[i])
u = open("urls.txt", 'w')
for i in l:
    if i[-1]>'9' or i[-1] < '0':
        print('"https://*.'+i+'/*",', file=u)
u.close()

# ^https?://+([^:/]+\.)?domain\.com