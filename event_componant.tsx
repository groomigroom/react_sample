
/*수정하기*/

function Header(props){

return <header>
<h1><a href=“/“ onClick={(event)=>{
event.preventDefault()
props.onChangeMode()
}}>{props.title}</a></h1>
</header>
}



function Nav(props){
const lis = []
for(let i - 0; i<props.topics.length; i++){
let t = props.topics[i];
lis.push(<li key={t.id}>
<a id={t.id} href={‘/read/‘+t.id} onClick={event=>{
event.preventDefault()
props.onChangeMode(event.target.id)
}}>{t.title}</a>
</li>)

}


function App() 안에


return

<Header title=“WEB” onChangeMode={()=>{
alert(‘Header’)
}}>
<Nav topics={topics} onChangeMode{(id)=>{
alert(id)
}}></Nav>

