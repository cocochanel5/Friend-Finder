var friends = [ {
    "name" : "Dwight",
    "photo" : "https://theofficeanalytics.files.wordpress.com/2017/11/dwight.jpeg?w=1200",
    "scores" : [5,2,4,3,3,2,1,3,3,4]
}, {
    "name" : "Prison Mike",
    "photo" : "data:image/jpeg;base64,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",
    "scores" : [5,5,5,5,5,5,5,5,5,5]
}, {
    "name" : "Jim",
    "photo" : "https://miro.medium.com/max/2510/0*Xz-_cHSO6txphvHt.png",
    "scores" : [3,4,2,4,4,1,1,2,3,4]
}, {
    "name" : "Pam",
    "photo" : "https://www.lifeandstylemag.com/wp-content/uploads/2019/02/Jenna-Fischer-Best-Quotes-The-Office-Promo.jpg",
    "scores" : [5,4,2,5,1,1,2,1,3,5]
}, {
    "name" : "Stanley",
    "photo" : "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Stanley_Hudson.jpg/245px-Stanley_Hudson.jpg",
    "scores" : [4,1,5,3,4,5,2,3,4,5]
}, {
    "name" : "Kevin Malone",
    "photo" : "https://pbs.twimg.com/profile_images/572214650034651136/OQT2kGkj_400x400.jpeg",
    "scores" : [4,1,5,3,4,5,2,3,4,5]
}, {
    "name" : "Toby",
    "photo" : "https://i.redd.it/2o87vwpr14i21.jpg",
    "scores" : [3,4,2,4,4,1,1,2,3,4]
}, {
    "name" : "Angela",
    "photo" : "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-the-office-angela-kinsey.jpg",
    "scores" : [1,5,1,3,5,1,4,3,2,1]
}, {
    "name" : "Kelly",
    "photo" : "https://media1.popsugar-assets.com/files/thumbor/eXDFklp6xdWXLyvn9BcH5p-b_rk/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/06/21/951/n/1922283/05e3e789_edit_img_image_41730517_1466542783_kelly-th/i/Kelly-Kapoor-GIFs-From-Office.jpg",
    "scores" : [5,4,2,5,1,1,2,1,3,5]
}, {
    "name" : "Meredith",
    "photo" : "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Meredith_Palmer.jpg/255px-Meredith_Palmer.jpg",
    "scores" : [1,3,3,1,2,4,4,1,3,1]
}, {
    "name" : "Oscar",
    "photo" : "https://pbs.twimg.com/profile_images/956263585251905536/HI07Q-EL_400x400.jpg",
    "scores" : [5,2,4,3,3,2,1,3,3,4]
}, {
    "name" : "Phyllis",
    "photo" : "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-the-office-phyllis-smith.jpg",
    "scores" : [1,1,1,1,1,1,1,1,1,1]
}, {
    "name" : "Andy",
    "photo" : "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Andy_Bernard_photoshot.jpg/250px-Andy_Bernard_photoshot.jpg",
    "scores" : [2,3,5,5,3,5,2,1,3,2]
}, {
    "name" : "Creed",
    "photo" : "https://assets-jpcust.jwpsrv.com/thumbnails/nynwmy6p-720.jpg",
    "scores" : [2,3,5,5,3,5,2,1,3,2]
}];

module.exports = friends;