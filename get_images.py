import urllib.request
import urllib.parse
from html.parser import HTMLParser

class DDGParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = []
        
    def handle_starttag(self, tag, attrs):
        if tag == 'img':
            for attr in attrs:
                if attr[0] == 'src' and attr[1].startswith('https://'):
                    self.urls.append(attr[1])

def search_images(query):
    url = "https://html.duckduckgo.com/html/?q=" + urllib.parse.quote(query + ' unsplash photo high res')
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        parser = DDGParser()
        parser.feed(html)
        return parser.urls[:3]
    except Exception as e:
        return [str(e)]

print("Pizza:", search_images("supreme pizza"))
print("Detroit:", search_images("detroit style pizza"))
print("Sandwich:", search_images("sub sandwich"))
print("Pasta:", search_images("baked pasta dish"))
print("Wings:", search_images("chicken wings"))
print("Salad:", search_images("greek salad"))
