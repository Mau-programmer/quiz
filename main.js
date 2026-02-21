const questionCon = document.getElementById('questionContainer');
const container = document.getElementById('questionContainer')

// Data structure
let quizes = {
    quiz1: {
        q_1: {
            a: {
                name: "Some answer",
                checked: false
            },
            b: {
                name: "Some answer",
                checked: false
            },
            c: {
                name: "Some answer",
                checked: false
            },
            d: {
                name: "Some answer",
                checked: false
            }
        }
    }
}
function setCreate() {
    let question = document.createElement('div');
    question.id = "q_1";
    questionCon.appendChild(question);

    let titleLabel = document.createElement('label');
    titleLabel.htmlFor = question.id + "_title";
    titleLabel.innerText = "Question name:";

    let title = document.createElement('input');
    title.id = question.id + "_title";
    title.type = 'text';

    question.append(titleLabel, title);

    for (let i = 0; i < 4; i++) {
        let wrapper = document.createElement('div')
        wrapper.className = "a_" + i;
        question.appendChild(wrapper)

        let inp = document.createElement('input');
        inp.type = 'text';
        inp.placeholder = i + 1;

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        wrapper.append(inp, checkbox);
    }

    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.className = "DelBtn";

    question.appendChild(delBtn);
}