const Message = () => {
    const name = 'dylan'
  return (
    <>
        <div>
            <h1>{(name) &&  'Hello guys'}</h1>
            <h1>{name ? name : 'Hello thieves'}</h1>

        </div>
        <div>

        </div>
    
    </>
  )
}
export default Message