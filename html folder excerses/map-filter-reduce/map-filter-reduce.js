const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
(() => {

    const filterlanguege = users.filter((lang)=>{
        const newamount = lang.languages.length >= 3
        return newamount
    })
    console.log(filterlanguege)

const useremail = users.map(users =>{
    let mapOfEmials = users.id + users.email
    return mapOfEmials
})
    console.log(useremail)



    const totalAverageOfYears = users.reduce((total, user) => {
        return total + user.yearsOfExperience;
    }, 0);

    const averageYears = totalAverageOfYears / users.length;

    console.log("Total number of years =>", totalAverageOfYears);
    console.log("Average Number of year =>", averageYears)


    const longestEmail = users.reduce((leng, user)=> {
        if (user.email.length > leng.email.length) {
            return user
        } else
        {
            return leng
            }
        }, users[0])
        console.log(longestEmail)

    const nameOfInstruct = users.reduce((accumulator, user, index)=>{
      if (index === 0){
          return `hi ${user.name}`
      }
      if (index === users.length - 1){
          return `${accumulator} ${user.name} the end`
      }
       return `${accumulator}, ${user.name}`
    }, "")
    console.log(nameOfInstruct)
})();