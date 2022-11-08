window.$docsify = {
    name: 'ZSXB2468\'s notes',
    repo: 'ZSXB2468/notes_docsify',
    loadSidebar: true,
    subMaxLevel: 2,
    requestHeaders: {
        'cache-control': 'no-store',
    },
    autoHeader: true,
    notFoundPage: true,
    formatUpdated: '{YYYY}/{MM}/{DD} {HH}:{mm}',
    auto2top: true,
    pagination: {
        previousText: {
            '/en/': 'PREVIOUS',
            '/zh-cn/': '上一节',
            '/': '上一节'
        },
        nextText: {
            '/en/': 'NEXT',
            '/zh-cn/': '下一节',
            '/': '下一节'
        },
        crossChapter: true,
        crossChapterText: true,
    },
}