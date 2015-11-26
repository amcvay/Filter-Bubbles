//Webhose API 

//https://webhose.io/search?token=ec4e5f81-890c-4ed6-b7ee-ac84249e74e4&format=json&q=(Baby)%20performance_score%3A%3E0&site=dailymail.co.uk&site_type=news

//https://webhose.io/search?token=ec4e5f81-890c-4ed6-b7ee-ac84249e74e4&format=json&q=(Baby)%20performance_score%3A%3E5&site=dailymail.co.uk&site_type=news

console.log("WebHose is all good")

var key = 'https://webhose.io/search?token=ec4e5f81-890c-4ed6-b7ee-ac84249e74e4&format=json&q=('

var performance = ')%20performance_score%3A%3E0'

var site_mail = '&site=dailymail.co.uk'

var site_bbc = '&site=bbc.co.uk'

var site_guardian = '&site=theguardian.com'

var type = '&site_type=news'

//var recent = 'Osborne'

function callWebhose(url, container)
{
    var ul = $(container)
    
    $.ajax(
    {
        dataType: "json",
        url: url, // the url to get data from
        success: function ( json ) // the function to execute once we get data back from WebHose
        {
            console.log(json)

            var posts = json.posts

            var total = posts.length
            var counter = 0
            while (counter < total) 
            {

                var post = posts[counter]

                console.log(post)

                console.log(post.title)

                console.log(post.url)

                console.log(post.thread.main_image)
                
                var li = '<li>'
//                    + '<h2>' + post.title + '</h2>'
                    + '<img src="' + post.thread.main_image + '">'
                    + '<a href="' + post.url + '">' + post.title + '</a>'
                    + '</li>'
                
                ul.append(li)

                //increment counter by 1
                //counter = counter + 1
                //counter += 1
                counter ++

            }
        } 
    }) 
}
