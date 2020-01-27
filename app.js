var dataObject = [
    {
        id: 1,
        text: 'Move the mouse over this cell to see the remaining text as title'
    },
    {
        id: 2,
        text: 'Move the mouse over this cell to see the remaining text as title'
    },
    {
        id: 3,
        text: 'Move the mouse over this cell to see the remaining text as title'
    },
    {
        id: 4,
        text: 'Move the mouse over this cell to see the remaining text as title'
    }
];

function cutTextCellRender(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    const dataAtCell = instance.getDataAtCell(row, col);
    if (dataAtCell && dataAtCell.length > 30) {
        td.innerHTML = '<div title="' + td.innerHTML + '">' + td.innerHTML.slice(0, 30) + '...</div>';
    }
}

var hotElement = document.querySelector('#hot');
var hotSettings = {
    data: dataObject,
    columns: [
        {
            data: 'id',
            type: 'numeric',
            width: 40
        },
        {
            data: 'text',
            renderer: cutTextCellRender,
            width: 200
        }
    ],
    autoWrapRow: false,
    height: 487,
    rowHeaders: true,
    colHeaders: [
        'ID',
        'Text'
    ]
};
var hot = new Handsontable(hotElement, hotSettings);

