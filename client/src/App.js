import Form from './components/Form'

function App() {

  /* const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, []) */

  return (
    <>
      <section className="w-full h-screen font-Outfit">
        
        <div className="w-full h-screen flex justify-center items-center outline outline-1 outline-black">
          <Form />
        </div>
      </section>
    </>
  );
}

export default App;
