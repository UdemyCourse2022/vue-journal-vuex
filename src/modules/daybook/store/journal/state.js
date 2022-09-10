export default ()=>({
isLoading:true,
entries: [{
    id: new Date().getTime(),
    date: new Date().toDateString(),
    text:'texto1',
    picture:null,
},
{
    id: new Date().getTime()+1000,
    date: new Date().toDateString(),
    text:'texto2',
    picture:null,
},
{
    id: new Date().getTime()+2000,
    date: new Date().toDateString(),
    text:'texto3',
    picture:null,
},
]
})