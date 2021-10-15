
### Develop by: 
<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/marcos-maverick-091321101/">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHGgHQzwANMqw/profile-displayphoto-shrink_800_800/0/1596469756072?e=1638403200&v=beta&t=GWjdapw-tKaS8NAoFR2ok4gfW4ewhmct16n7Ms8-Ua8" width="100px;" alt="Foto do Iuri Silva no GitHub"/><br>
        <sub>
          <b>Marcos Maverick</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


---

## Technologys
[ReactJS](https://pt-br.reactjs.org/) / 
[NextJS](https://nextjs.org/)<br>
[Typescript](https://www.typescriptlang.org/)<br>
[Next Router](https://nextjs.org/docs/api-reference/next/router#userouter)<br>
[styled-components](https://styled-components.com/)

---

## 📁 Component: Folder Explanation

 `BookCard` : This component be responsible to show Books in the main card<br><br>
 `BookList`: This component be responsible to get all query from api and show as list<br><br>
 `BookProfile`: Get query [ id ] and show a book detail<br><br>
 `CurrentlyRead`: Show the last Book access (this component didn't get dinamic data from api).
- I mock this information in a variable who calls: lastRead (you'll find this mock data on `services` folder)

`GreatingsMessage`: Show a Greetings message<br><br>
`InputSerch`: This component is responsible to get a value of input and set to query<br><br>
`LoaderComponent`: This is a simple component to show a Spinner if query is not loaded from api.<br><br>
`Menu`: Bottom MENU component fixed in the application.<br><br>
`ReviewsComponent`: Static component to show a video list (this component didn't get any query from api or variable) is literaly static component with a image.




---
## Who to install and run the application

For install
```bash
npm install
# or
yarn
```
for run:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to start application.

### Only Mobile

---
## Library

- [React-icon](https://react-icons.github.io/react-icons/)
- [react-loader-spinner]()
- [Axios](https://www.npmjs.com/package/axios)

---


## Test Check
 ## Home
 [ ✅ ] - Create a Pixel Perfect screen based on design above; <br>
 [ ✅ ] - The books must be clickable and redirect to details screen.<br>
 

---

 ## Search:
 - In this screen the functionalities below are mandatory:<br>
 [ ✅ ] - See a list of books based on search query; <br>
 [ ✅ ] - Make it possible to search for more books with a "Load more" button;<br>
[ ✅ ] - Search books by name;<br>
[ ✅ ] - Click on one of the books to see their details.<br>

 ---

 ## Books details:
 - In this screen the functionalities below are mandatory:<br>
 [ ✅ ] See all information for the selected book. <br>


 ## API

```js
`https://www.googleapis.com/books/v1/volumes?q=${query}`
```




 



