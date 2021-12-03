# models

## products
- name*
    - string
    
- price
    - number

- image
    -string (this is a url to the image storage)

# Controllers

## Uploading image

- upload image
    - takes a req.file and places that file on the lacal storage

## products

- create product
    -create a doc on the DB of a new product

- GetAllProduct
    - finds all products

# routes

## productRoute
- '\'
    - post - createProduct
    - get - getAllProducts

- 'upload'
    - post - uploadProductImage



