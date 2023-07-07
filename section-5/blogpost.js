const blog={
    title: 'jeevan',
    body: "hero",
    author: "siddu",
    comments: [
        {author: 'a',body: 'b'},
        {author: 'a',body: 'b'},
    
    ],
    isLive: true
}
console.log(blog);

//constructor function
function Post(title,body,author){
    this.title=title;
    this.body=body;
    this.author=author;
    this.comments=[];
    this.isLive=false;
}

const npost = new Post('a','b','c');
console.log(npost);