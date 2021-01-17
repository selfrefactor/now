# dom.visualviewport.enabled to `true` in Firefox

# after build, move `public` folder to now/{{CURRENT_PROJECT}} folder

# MODES

## Write Sentence

```
    "in": "NODE_ENV=development CURRENT_COMPONENT='write.sentence' parcel -p 8080 index.html ",
    "out": "CURRENT_COMPONENT='write.sentence' NODE_ENV=production parcel build index.html --no-minify --public-url / --out-dir public"
```

## Learning Meme

```
    "in": "NODE_ENV=development CURRENT_COMPONENT='learning.meme' parcel -p 8080 index.html ",
    "out": "CURRENT_COMPONENT='learning.meme' NODE_ENV=production parcel build index.html --no-minify --public-url / --out-dir public"
```

## Select Article

```
    "in": "NODE_ENV=development CURRENT_COMPONENT='select.article' parcel -p 8080 index.html ",
    "out": "CURRENT_COMPONENT='select.article' NODE_ENV=production parcel build index.html --no-minify --public-url / --out-dir public"
```