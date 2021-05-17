var initialState = [
    {
        id: 1,
        magv:18282,
        date:'20/6/1992',
        username: 'bangbang',
        password: '12345',
        name: "Nguyễn Văn A",
        Adress: "122 HVT",
        PhoneNumber: "0383131361",
        khoa: "Cntt"
    },
];
const teachers = (state = initialState,action) =>{
    switch(action.type){
        default:return [...state]
    }
}
export default teachers