import client from "./db.js";

class Book{
  findAll(){
    return client.execute("SELECT * FROM book");
  }

  create({name, author, price}){
    return client.execute(
      'INSERT INTO book (name) VALUES (${恋爱物语})'
    )
  }
}

const bookModel = new Book();

export const BookAll = async () => {
  return await bookModel.findAll();
}

export const BookSel = async (id) => {
  console.info("@@query id: ",id);
  console.log('SELECT * FROM book WHERE id = ${id}');
  return await client.execute('SELECT * FROM book WHERE id = ${id}');
}
