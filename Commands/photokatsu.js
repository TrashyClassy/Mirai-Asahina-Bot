module.exports = function (e, client) {
	const pingpong = [
	"Here's your PR card of Ichigo Hoshimiya, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/8/8b/Photokatsu_0001.jpg/revision/latest?cb=20160127150908 (Card #1 - Sweet Rewards)",
	"Here's your PR+ card of Ichigo Hoshimiya, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/3/30/Photokatsu_0002.jpg/revision/latest?cb=20160209170314 (Card #2 - Playful Angel)",
	"Here's your SR card of Ichigo Hoshimiya, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/0/00/Photokatsu_0003.jpg/revision/latest?cb=20160128125917 (Card #3 - Macaron Time)",
	"Here's your SR+ card of Ichigo Hoshimiya, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/5/5e/Photokatsu_0004.png/revision/latest?cb=20160201142744 (Card #4 - Whip Cream)",
    "Here's your R card of Ichigo Hoshimiya, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/d/d3/Photokatsu_0005.jpg/revision/latest?cb=20160128030316 (Card #5)",
	"Here's your R+ card of Ichigo Hoshimiya, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/8/8e/Photokatsu_0006.png/revision/latest?cb=20160201095021 (Card #6)",
	"Here's your PR card of Aoi Kiriya, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/8/86/Photokatsu_0007.png/revision/latest?cb=20160131131352 (Card #7 - A Wish to the Milky Way)",
	"Here's your PR+ card of Aoi Kiriya, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/2/27/Photokatsu_0008.jpg/revision/latest?cb=20160202123214 (Card #8 - Shine of the Milky Way)",
	"Here's your SR card of Aoi Kiriya, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/e/e1/Photokatsu_0009.jpg/revision/latest?cb=20160128125928 (Card #9 - Prism Star)",
	"Here's your SR+ card of Aoi Kiriya, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/9/98/Photokatsu_0010.jpg/revision/latest?cb=20160202130703 (Card #10 - Roller Star)",
	"Here's your R card of Aoi Kiriya, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/7/7a/Photokatsu_0011.jpg/revision/latest?cb=20160129111830 (Card #11)",
	"Here's your R+ card of Aoi Kiriya, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/c/c8/Photokatsu_0012.png/revision/latest?cb=20160202154047 (Card #12)",
	"Here's your PR card of Ran Shibuki, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/2/29/Photokatsu_0013.jpg/revision/latest?cb=20160131072427 (Card #13 - Invitation from an Ageha)",
	"Here's your PR+ card of Ran Shibuki, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/4/4c/Photokatsu_0014.jpg/revision/latest?cb=20160210123353 (Card #14 - Rose Princess)",
	"Here's your SR card of Ran Shibuki, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/c/cc/Photokatsu_0015.png/revision/latest?cb=20160128110143 (Card #15 - Night of the Ageha)",
	"Here's your SR+ card of Ran Shibuki, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/0/0d/Photokatsu_0016.jpg/revision/latest?cb=20160621152205 (Card #16 - The Blue Rose Under the Moonlight)",
	"Here's your R card of Ran Shibuki, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/8/83/Photokatsu_0017.jpg/revision/latest?cb=20160128030837 (Card #17)",
	"Here's your R+ card of Ran Shibuki, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/9/9e/Photokatsu_0018.jpg/revision/latest?cb=20160205134003 (Card #18)",
	"Here's your SR card of Otome Arisugawa, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/9/97/Photokatsu_0019.png/revision/latest?cb=20160127145624 (Card #19 - The Rainbow Alice)",
	"Here's your SR+ card of Otome Arisugawa, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/e/e9/Photokatsu_0020.png/revision/latest?cb=20160205220016 (Card #20 - The Orange of Happiness)",
	"Here's your R card of Otome Arisugawa, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/3/37/Photokatsu_0021.png/revision/latest?cb=20160131131128 (Card #21)",
	"Here's your R+ card of Otome Arisugawa, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/b/be/Photokatsu_0022.png/revision/latest?cb=20160131125831 (Card #22)",
	"Here's your SR card of Yurika Todo, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/1/15/Photokatsu_0023.jpg/revision/latest?cb=20160127111910 (Card #23 - An Elegant Smile)",
	"Here's your SR+ card of Yurika Todo, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/c/c1/Photokatsu_0024.jpg/revision/latest?cb=20160205153421 (Card #24 - Resident of the Bird Cage)",
	"Here's your R card of Yurika Todo, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/d/dc/Photokatsu_0025.jpg/revision/latest?cb=20160128093827 (Card #25)",
	"Here's your R+ card of Yurika Todo, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/c/c9/Photokatsu_0026.jpg/revision/latest?cb=20160212132825 (Card #26)",
	"Here's your R card of Kaede Ichinose, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/4/45/Photokatsu_0027.jpg/revision/latest?cb=20160128094105 (Card #27)",
	"Here's your R+ card of Kaede Ichinose, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/a/ae/Photokatsu_0028.png/revision/latest?cb=20160131130121 (Card #28)",
	"Here's your R card of Shion Kamiya, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/7/7d/Photokatsu_0029.png/revision/latest?cb=20160127091819 (Card #29)",
	"Here's your R+ card of Shion Kamiya, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/f/ff/Photokatsu_0030.png/revision/latest?cb=20160131131533 (Card #30)",
	"Here's your R card of Hikari Minowa, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/e/ee/Photokatsu_0031.jpg/revision/latest?cb=20160127112009 (Card #31)",
	"Here's your R+ card of Hikari Minowa, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/d/d2/Photokatsu_0032.jpg/revision/latest?cb=20160617142934 (Card #32)",
	"Here's your SR card of Sakura Kitaoji, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/d/d5/Photokatsu_0033.jpg/revision/latest?cb=20160130091738 (Card #33 - Guide of the Fairytales)",
	"Here's your SR+ card of Sakura Kitaoji, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/4/43/Photokatsu_0034.png/revision/latest?cb=20160207221553 (Card #34 - Girl of the Spring Garden)",
	"Here's your R card of Sakura Kitaoji, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/0/0d/Photokatsu_0035.jpg/revision/latest?cb=20160128030949 (Card #35)",
	"Here's your R+ card of Sakura Kitaoji, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/d/d1/Photokatsu_0036.png/revision/latest?cb=20160201095056 (Card #36)",
	"Here's your SR card of Seira Otoshiro, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/8/85/Photokatsu_0037.jpg/revision/latest?cb=20160128125906 (Card #37 - Little Cat)",
	"Here's your SR+ card of Seira Otoshiro, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/e/e8/Photokatsu_0038.jpg/revision/latest?cb=20160213180256 (Card #38 - Let's Rock!)",
	"Here's your R card of Seira Otoshiro, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/b/bf/Photokatsu_0039.jpg/revision/latest?cb=20160128094203 (Card #39)",
	"Here's your R+ card of Seira Otoshiro, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/e/e3/Photokatsu_0040.jpg/revision/latest?cb=20160202144325 (Card #40)",
	"Here's your SR card of Ki Saegusa, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/2/2b/Photokatsu_0041.jpg/revision/latest?cb=20160131070932 (Card #41 - Colorful Tile)",
	"Here's your SR+ card of Ki Saegusa, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/8/8e/Photokatsu_0042.png/revision/latest?cb=20160131130211 (Card #42 - Milk Clown)",
	"Here's your R card of Ki Saegusa, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/0/03/Photokatsu_0043.jpg/revision/latest?cb=20160128030617 (Card #43)",
	"Here's your R+ card of Ki Saegusa, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/7/78/Photokatsu_0044.png/revision/latest?cb=20160131125549 (Card #44)",
	"Here's your R card of Sora Kazesawa, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/d/d2/Photokatsu_0045.jpg/revision/latest?cb=20160129111803 (Card #45)",
	"Here's your R+ card of Sora Kazesawa, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/3/36/Photokatsu_0046.jpg/revision/latest?cb=20160205162147 (Card #46)",
	"Here's your R card of Maria Himesato, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/3/3d/Photokatsu_0047.jpg/revision/latest?cb=20160128031052 (Card #47)",
	"Here's your R+ card of Maria Himesato, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/5/5f/Photokatsu_0048.jpg/revision/latest?cb=20160205162216 (Card #48)",
	"Here's your SR card of Mizuki Kanzaki, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/5/5c/Photokatsu_0049.jpg/revision/latest?cb=20160202123258 (Card #49 - Tonight's Spotlight)",
	"Here's your SR+ card of Mizuki Kanzaki, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/2/28/Photokatsu_0050.jpg/revision/latest?cb=20160203135418 (Card #50 - Night of the Moon)",
	"Here's your R card of Mizuki Kanzaki, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/1/19/Photokatsu_0051.jpg/revision/latest?cb=20160129111733 (Card #51)",
	"Here's your R+ card of Mizuki Kanzaki, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/c/c1/Photokatsu_0052.jpg/revision/latest?cb=20160203040601 (Card #52)",
	"Here's your SR card of Mikuru Natsuki, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/2/26/Photokatsu_0053.jpg/revision/latest?cb=20160202131359 (Card #53 - Going Out on a Day Off)",
	"Here's your SR+ card of Mikuru Natsuki, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/b/ba/Photokatsu_0054.jpg/revision/latest?cb=20160211113325 (Card #54 - Vivid Time)",
	"Here's your R card of Mikuru Natsuki, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/c/c9/Photokatsu_0055.jpg/revision/latest?cb=20160129112023 (Card #55)",
	"Here's your R+ card of Mikuru Natsuki, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/4/4e/Photokatsu_0056.jpg/revision/latest?cb=20160203163659 (Card #56)",
	"Here's your PR card of Akari Ozora, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/9/91/Photokatsu_0057.jpg/revision/latest?cb=20160131131235 (Card #57 - A White Bird Floating On Top of the Water)",
	"Here's your PR+ card of Akari Ozora, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/2/2e/Photokatsu_0058.png/revision/latest?cb=20160201140301 (Card #58 - The Grand White Bird Dancing on the Lake)",
	"Here's your SR card of Akari Ozora, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/e/e5/Photokatsu_0059.jpg/revision/latest?cb=20160202123400 (Card #59 - Let's sing a SHOW!)",
	"Here's your SR+ card of Akari Ozora, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/a/a4/Photokatsu_0060.png/revision/latest?cb=20160203213000 (Card #60 - Happy Show Time!)",
	"Here's your R card of Akari Ozora, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/7/7b/Photokatsu_0061.png/revision/latest?cb=20160127092534 (Card #61)",
	"Here's your R+ card of Akari Ozora, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/7/7e/Photokatsu_0062.jpg/revision/latest?cb=20160204174227 (Card #62)",
	"Here's your PR card of Sumire Hikami, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/5/56/Photokatsu_0063.png/revision/latest?cb=20160128085840  (Card #63 - Falling in love with an Apple)",
	"Here's your PR+ card of Sumire Hikami, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/8/82/Photokatsu_0064.jpg/revision/latest?cb=20160209170344 (Card #64 - The Tree of Rubies)",
	"Here's your SR card of Sumire Hikami, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/8/87/Photokatsu_0065.jpg/revision/latest?cb=20160128125938 (Card #65 - Blue Noblesse)",
	"Here's your SR+ card of Sumire Hikami, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/3/36/Photokatsu_0066.jpg/revision/latest?cb=20160202142336 (Card #66 - The New Green Blossom)",
	"Here's your R card of Sumire Hikami, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/b/b0/Photokatsu_0067.jpg/revision/latest?cb=20160130084731 (Card #67)",
	"Here's your R+ card of Sumire Hikami, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/b/b8/Photokatsu_0068.jpg/revision/latest?cb=20160206130022 (Card #68)",
	"Here's your PR card of Hinaki Shinjo, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/e/e0/Photokatsu_0069.jpg/revision/latest?cb=20160131124803 (Card #69 - To the World of Dreams)",
	"Here's your PR+ card of Hinaki Shinjo, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/3/35/Photokatsu_0070.jpg/revision/latest?cb=20160202130953 (Card #70 - Miracle World)",
	"Here's your R card of Hinaki Shinjo, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/0/04/Photokatsu_0071.jpg/revision/latest?cb=20160131125317 (Card #71)",
	"Here's your R+ card of Hinaki Shinjo, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/d/d0/Photokatsu_0072.jpg/revision/latest?cb=20160204173704 (Card #72)",
	"Here's your R card of Juri Kurebayashi, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/c/c8/Photokatsu_0073.jpg/revision/latest?cb=20160129111815 (Card #73)",
	"Here's your R+ card of Juri Kurebayashi, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/8/85/Photokatsu_0074.jpg/revision/latest?cb=20160204173621 (Card #74)",
	"Here's your R card of Madoka Amahane, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/2/2d/Photokatsu_0075.jpg/revision/latest?cb=20160128030022 (Card #75)",
	"Here's your R+ card of Madoka Amahane, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/b/b3/Photokatsu_0076.jpg/revision/latest?cb=20160201004907 (Card #76)",
	"Here's your R card of Rin Kurosawa, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/0/07/Photokatsu_0077.jpg/revision/latest?cb=20160130071852 (Card #77)",
	"Here's your R+ card of Rin Kurosawa, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/2/27/Photokatsu_0078.jpg/revision/latest?cb=20160202130919 (Card #78)",
	"Here's your R card of Miyabi Fujiwara, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/b/b1/Photokatsu_0079.jpg/revision/latest?cb=20160127235004 (Card #79)",
	"Here's your R+ card of Miyabi Fujiwara, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/9/9f/Photokatsu_0080.jpg/revision/latest?cb=20160129125806 (Card #80)",
	"Here's your R card of Kokone Kurisu, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/d/d9/Photokatsu_0081.jpg/revision/latest?cb=20160128030154 (Card #81)",
	"Here's your R+ card of Kokone Kurisu, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/a/ad/Photokatsu_0082.jpg/revision/latest?cb=20160204175016 (Card #82)",
	"Here's your N card of Harumi Sano, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/f/fd/Photokatsu_0083.jpg/revision/latest?cb=20160128094336 (Card #83)",
	"Here's your N+ card of Harumi Sano, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/d/d7/Photokatsu_0084.jpg/revision/latest?cb=20160206131956 (Card #84)",
	"Here's your N card of Nana Yuzuki, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/9/9c/Photokatsu_0085.jpg/revision/latest?cb=20160127112307 (Card #85)",
	"Here's your N+ card of Nana Yuzuki, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/d/d4/Photokatsu_0086.png/revision/latest?cb=20160202133238 (Card #86)",
	"Here's your N card of Yuna Nakayama, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/5/5c/Photokatsu_0087.png/revision/latest?cb=20160127092839 (Card #87)",
	"Here's your N+ card of Yuna Nakayama, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/f/f6/Photokatsu_0088.png/revision/latest?cb=20160131071136 (Card #88)",
	"Here's your N card of Aya Hirasaka, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/1/1b/Photokatsu_0089.jpg/revision/latest?cb=20160128094454 (Card #89)",
	"Here's your N+ card of Aya Hirasaka, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/4/40/Photokatsu_0090.jpg/revision/latest?cb=20160130155940 (Card #90)",
	"Here's your R card of Maria Ayasaki, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/8/80/Photokatsu_0091.jpg/revision/latest?cb=20160127112535 (Card #91)",
	"Here's your R+ card of Maria Ayasaki, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/8/85/Photokatsu_0092.jpg/revision/latest?cb=20160206132939 (Card #92)",
	"Here's your R card of Konatsu Ayase, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/3/37/Photokatsu_0093.jpg/revision/latest?cb=20160128094819 (Card #93)",
	"Here's your R+ card of Konatsu Ayase, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/8/86/Photokatsu_0094.jpg/revision/latest?cb=20160130091341 (Card #94)",
	"Here's your R card of Mimi Watanuki, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/e/ee/Photokatsu_0095.jpg/revision/latest?cb=20160127112135 (Card #95)",
	"Here's your R+ card of Mimi Watanuki, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/b/b6/Photokatsu_0096.jpg/revision/latest?cb=20160206133003 (Card #96)",
	"Here's your R card of Anna Kodama, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/9/90/Photokatsu_0097.jpg/revision/latest?cb=20160127112806 (Card #97)",
	"Here's your R+ card of Anna Kodama, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/5/56/Photokatsu_0098.jpg/revision/latest?cb=20160130160233 (Card #98)",
	"Here's your R card of Himari Otoha, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/b/ba/Photokatsu_0099.jpg/revision/latest?cb=20160128095400 (Card #99)",
	"Here's your R+ card of Himari Otoha, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/c/c7/Photokatsu_0100.jpg/revision/latest?cb=20160130160433 (Card #100)",
	"Here's your R card of Oto Kinkawa, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/a/ae/Photokatsu_0101.jpg/revision/latest?cb=20160127112854 (Card #101)",
	"Here's your R+ card of Oto Kinkawa, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/f/f9/Photokatsu_0102.jpg/revision/latest?cb=20160206132923 (Card #102)",
	"Here's your R card of Kokoro Yoshikawa, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/b/bf/Photokatsu_0103.jpg/revision/latest?cb=20160128095605 (Card #103)",
	"Here's your R+ card of Kokoro Yoshikawa, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/8/89/Photokatsu_0104.png/revision/latest?cb=20160205064058 (Card #104)",
	"Here's your R card of Nanami Shibata, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/b/b5/Photokatsu_0105.jpg/revision/latest?cb=20160127113021 (Card #105)",
	"Here's your R+ card of Nanami Shibata, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/6/6f/Photokatsu_0106.png/revision/latest?cb=20160205063822 (Card #106)",
	"Here's your R card of Nagisa Matsue, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/2/2e/Photokatsu_107.jpg/revision/latest?cb=20160128100626 (Card #107)",
	"Here's your R+ card of Nagisa Matsue, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/b/b1/Photokatsu_0108.png/revision/latest?cb=20160205063805 (Card #108)",
	"Here's your R card of Wakaba Kuze, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/d/df/Photokatsu_0109.jpg/revision/latest?cb=20160128101034 (Card #109)",
	"Here's your R+ card of Wakaba Kuze, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/6/6f/Photokatsu_0110.png/revision/latest?cb=20160205063801 (Card #110)",
	"Here's your R card of Rio Kimura, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/b/ba/Photokatsu_0111.jpg/revision/latest?cb=20160127113256 (Card #111)",
	"Here's your R+ card of Rio Kimura, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/9/9e/Photokatsu_0112.png/revision/latest?cb=20160205063745 (Card #112)",
	"Here's your R card of Akira Natsume, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/0/0a/Photokatsu_0113.jpg/revision/latest?cb=20160127113657 (Card #113)",
	"Here's your R+ card of Akira Natsume, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/1/14/Photokatsu_0114.png/revision/latest?cb=20160205063708 (Card #114)",
	"Here's your R card of Michiru Kurosawa, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/8/83/Photokatsu_0115.png/revision/latest?cb=20160127093011 (Card #115)",
	"Here's your R+ card of Michiru Kurosawa, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/4/49/Photokatsu_0116.jpg/revision/latest?cb=20160130091502 (Card #116)",
	"Here's your R card of Ayako Yuki, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/8/82/Photokatsu_0117.jpg/revision/latest?cb=20160128101219 (Card #117)",
	"Here's your R+ card of Ayako Yuki, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/6/69/Photokatsu_0118.png/revision/latest?cb=20160205063651 (Card #118)",
	"Here's your R card of Yuu Hattori, " + e.message.author.nickMention + "! http://vignette1.wikia.nocookie.net/aikatsu/images/e/eb/Photokatsu_0119.png/revision/latest?cb=20160127093219 (Card #119)",
	"Here's your R+ card of Yuu Hattori, " + e.message.author.nickMention + "! http://vignette3.wikia.nocookie.net/aikatsu/images/c/c4/Photokatsu_0120.png/revision/latest?cb=20160131142205 (Card #120)",
	"Here's your R card of Reika Yuki, " + e.message.author.nickMention + "! http://vignette4.wikia.nocookie.net/aikatsu/images/6/60/Photokatsu_121.jpg/revision/latest?cb=20160128121841 (Card 121)",
	"Here's your R+ card of Reika Yuki, " + e.message.author.nickMention + "! http://vignette2.wikia.nocookie.net/aikatsu/images/0/0b/Photokatsu_0122.png/revision/latest?cb=20160205063121 (Card #122)"
];
		let choice = ~~(Math.random() * pingpong.length);
        e.message.channel.sendMessage(pingpong[choice])
}