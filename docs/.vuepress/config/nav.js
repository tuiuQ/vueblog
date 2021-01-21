module.exports = [
  { text: "首页", link: "/" },
  { text: "文章",
    items: [
      { text: "大数据",
        items: [
          {
            text: "Hadoop",
            link: "/news/bigdata/hadoop"
          }
        ]
      },
      { text: "python",
        items: [
          {
            text: "Django",
            link: "/news/python/django/00.md"
          },
          {
            text: "爬虫",
            link: "/news/python/sipder/00.md"
          }
        ]
      },
      {
        text: "开发笔记",
        items: [
          {
            text: "ea-music",
            link: "/news/dev/ea-music/00.md"
          }
        ]
      },
	  {
		text: "前端",
		link: "/news/front"	
	  }
    ]
  },
  {
    text: 'TimeLine',
    link: '/timeline/',
    icon: 'reco-date'
  }
]