interface ButtonProps {
  text?: string;
}

function Button(Props : ButtonProps) {
  return <button className="bg-violet-500 p-2" >{Props.text ?? 'Default'}</button>
}

function App() {
  return (
    <div>
      <Button text='Enviar' />
      <Button text='Ok' />
      <Button />
    </div>
  )
}

export default App
