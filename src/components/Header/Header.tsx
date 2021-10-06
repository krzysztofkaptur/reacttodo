const Header: React.FC<{ title: string }> = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
    </header>
  )
}

export default Header