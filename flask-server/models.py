from flask import Flask
from peewee import *

db = 5

class BaseModel(Model):
    class Meta:
        database = db
        
class Menu(BaseModel):
    app = Appetizer()
    main = Main()
    desert = Desert()
    
class Appetizer(BaseModel):
    name = TextField()
    desc = TextField()
    
class Main(BaseModel):
    name = TextField()
    desc = TextField()
    
class Desert(BaseModel):
    name = TextField()
    desc = TextField()