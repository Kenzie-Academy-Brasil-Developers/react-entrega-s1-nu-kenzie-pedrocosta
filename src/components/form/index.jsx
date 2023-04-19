import "./form.css";

const AppFormArea = ({ listTransactions, setListTransactions }) => {
  const preventReload = (event) => {
    event.preventDefault();

    if (event.target[2].value === "saída") {
      const transaction = {
        description: event.target[0].value,
        value: event.target[1].value * -1,
        type: event.target[2].value,
      };
      setListTransactions([...listTransactions, transaction]);
    } else {
      const transaction = {
        description: event.target[0].value,
        value: parseFloat(event.target[1].value),
        type: event.target[2].value,
      };
      setListTransactions([...listTransactions, transaction]);
    }
  };

  return (
    <section className="formArea">
      <form onSubmit={preventReload}>
        <div className="entryDescription">
          <label htmlFor="">Descrição</label>
          <input type="text" placeholder="Digite aqui sua descrição" />
        </div>

        <div className="entryContent">
          <div className="entryValue">
            <label htmlFor="">Valor</label>
            <input type="text" />
          </div>
          <div className="entryType">
            <label htmlFor="">Tipo de valor</label>
            <select name="" id="">
              <option value="entrada">Entrada</option>
              <option value="saída">Saída</option>
            </select>
          </div>
        </div>
        <button type="submit">Inserir valor</button>
      </form>
    </section>
  );
};

export default AppFormArea;

//uma outra forma de fazer//

// const AppFormArea = ({ listTransactions, setListTransactions }) => {
//     const [description,setDescription] = useState("")
//     const [values,setValue] = useState("")
//     const [types,setType] = useState("")
//   const preventReload = (event) => {
//     event.preventDefault();

//     if (type === "saída") {
//         const transaction = {
//             description: description,
//             value: values,
//             type: types,
//           };
//       setListTransactions([...listTransactions, transaction]);
//     } else {
//       const transaction = {
//         description: description,
//         value: values,
//         type: types,
//       };
//       setListTransactions([...listTransactions, transaction]);
//     }
//   };

//   return (
//     <section>
//       <form onSubmit={preventReload}>
//         <div className="entryDescription">
//           <label htmlFor="">Descrição</label>
//           <input type="text" placeholder="Digite aqui sua descrição" onChange={ (event) => setDescription(event.target.value)} />
//         </div>

//         <div className="entryContent">
//           <div className="entryValue">
//             <label htmlFor="">Valor</label>
//             <input type="text" onChange={ (event) => setValue(event.target.value)}/>
//           </div>
//           <div className="entryType">
//             <label htmlFor="">Tipo de valor</label>
//             <select name="" id="" onChange={ (event) => setType(event.target.value)} >
//               <option value="entrada">entrada</option>
//               <option value="saída">saída</option>
//             </select>
//           </div>
//         </div>
//         <button type="submit">Inserir valor</button>
//       </form>
//     </section>
//   );
// };
