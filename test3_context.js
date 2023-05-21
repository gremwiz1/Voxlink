// v1.2
'use strict';

const assert = require("assert").strict;

{// TEST 3.1
    // todo: Исправить функцию callGetter (изменения нужно вносить в класс Obj) таким образом, чтобы вызываемый внутри getter
    //  возвращал значение obj.prop путем вызова obj.getProp
    //  !!! Для решения задания воспользоваться стрелочной функцией !!!
    function callGetter() {
        class Obj {
            prop = 123;

            getProp = () => {
                return this.prop;
            };
        }
        const obj = new Obj();
        const getter = obj.getProp;

        try {
            assert.equal(typeof getter, 'function', "Test failed");

            return getter();
        } catch {
            return 0;
        }
    }

    {
        const result = callGetter();
        assert.equal(result, 123, "Test failed");
    }


    {
        const result = callGetter();
        assert.equal(result, 123, "Test failed");
    }
}
{// TEST 3.2
    // todo: Исправить функцию callGetter таким образом, чтобы вызываемый внутри getter
    //  возвращал значение obj.prop путем вызова obj.getProp
    //  !!! Для решения задания воспользоваться методом функции !!!
    function callGetter() {
        const obj = {
            prop: 777,
            getProp() {
                return this.prop;
            },
        };
        const getter = obj.getProp.bind(obj);

        try {
            assert.equal(typeof getter, 'function', "Test failed");

            return getter();
        } catch {
            return 0;
        }
    }

    {
        const result = callGetter();
        assert.equal(result, 777, "Test failed");
    }
}
{// TEST 3.3
    const obj = {
        prop: 123,
    };

    const getter = function () {
        return this.prop;
    };

    // todo: Исправьте код ниже. Сделайте четырьмя разными способами передачу контекста в функцию getter()
    //  При необходимости, объект obj разрешено изменять в процессе исполнения кода.

    { // Способ 1: Использование метода call()
        const result = getter.call(obj);
        assert.equal(result, 123, "Test failed");
    }

    { // Способ 2: Использование метода apply()
        const result = getter.apply(obj);
        assert.equal(result, 123, "Test failed");
    }

    { // Способ 3: Использование метода bind()
        const boundGetter = getter.bind(obj);
        const result = boundGetter();
        assert.equal(result, 123, "Test failed");
    }

    { // Способ 4: Использование стрелочной функции
        const arrowGetter = () => getter.call(obj);
        const result = arrowGetter();
        assert.equal(result, 123, "Test failed");
    }
}
