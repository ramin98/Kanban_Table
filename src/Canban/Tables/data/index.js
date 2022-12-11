let colors = [
    '#ABE9CE','#D8DCFF','#FFDFBA','#FEC6B7','#D9E6A2','#F2BAE1'
]

const data = [{
    id: 1,
    status: "open",
    date: "0:20h",
    content: "Check email",
    color: colors[Math.floor(Math.random() * colors.length)]
}, {
    id: 2,
    status: "open",
    date: "3:00h",
    content: "Compare PPC agencies and make a report for Steven",
    color: colors[Math.floor(Math.random() * colors.length)]
}, {
    id: 3,
    status: "open",
    date: "0:20h",
    content: "Get Patrick's approval for homepage new design",
    color: colors[Math.floor(Math.random() * colors.length)]
}, {
    id: 5,
    status: "open",
    date: "0:30h",
    content: "Meeting with Amanda (PR department)",
    color: colors[Math.floor(Math.random() * colors.length)]
}, {
    id: 6,
    status: "in progress",
    date: "0:30h",
    content: "Meeting with Amanda (PR department)",
    color: colors[Math.floor(Math.random() * colors.length)]
}, {
    id: 7,
    status: "in progress",
    date: "0:30h",
    content: "Meeting with Amanda (PR department)",
    color: colors[Math.floor(Math.random() * colors.length)]
}, {
    id: 8,
    status: "in progress",
    date: "0:30h",
    content: "Meeting with Amanda (PR department)",
    color: colors[Math.floor(Math.random() * colors.length)]
},
{
    id: 9,
    status: "in review",
    date: "0:30h",
    content: "Meeting with Amanda (PR department)",
    color: colors[Math.floor(Math.random() * colors.length)]
}, {
    id: 10,
    status: "in review",
    date: "0:30h",
    content: "Meeting with Amanda (PR department)",
    color: colors[Math.floor(Math.random() * colors.length)]
}, {
    id: 11,
    status: "in review",
    date: "0:30h",
    content: "Meeting with Amanda (PR department)",
    color: colors[Math.floor(Math.random() * colors.length)]
},
{
    id: 12,
    status: "done",
    date: "0:30h",
    content: "Meeting with Amanda (PR department)",
    color: colors[Math.floor(Math.random() * colors.length)]
}, {
    id: 13,
    status: "done",
    date: "0:30h",
    content: "Meeting with Amanda (PR department)",
    color: colors[Math.floor(Math.random() * colors.length)]
},
{
    id: 14,
    status: "done",
    date: "0:30h",
    content: "Meeting with Amanda (PR department)",
    color: colors[Math.floor(Math.random() * colors.length)]
}, {
    id: 15,
    status: "done",
    date: "0:30h",
    content: "Meeting with Amanda (PR department)",
    color: colors[Math.floor(Math.random() * colors.length)]
}, {
    id: 16,
    status: "done",
    date: "0:30h",
    content: "Meeting with Amanda (PR department)",
    color: colors[Math.floor(Math.random() * colors.length)]
}];

const statuses = [{
    status: "open",
}, {
    status: "in progress",
}, {
    status: "in review",
}, {
    status: "done",
}];

export { data, statuses };
