
interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: string;
    subtitle: string;
    description?: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

export default IBook;
