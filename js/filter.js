"use strict";

// Файл отвечает за работу фильтра

(function () {

   var agePin = document.querySelector('.filter__age-pin-min');
   var ageLine = document.querySelector('.filter__age-level');
   var filterAge = document.querySelector('.filter__age');


    /* добавляем обработчик перемещения пина фильтра (сразу с объявлением) */
    agePin.addEventListener('mousedown', function (evt) {
        evt.preventDefault();

        var startCoords = {
            x: evt.clientX      /* координата х кликнутого места */
        };

        var onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();

            var shift = {
                x: startCoords.x - moveEvt.clientX
            };

            startCoords = {
                x: moveEvt.clientX
            };

            agePin.style.left = (agePin.offsetLeft - shift.x) + 'px';
            
            
            if (agePin.offsetLeft < 20) {
                agePin.style.left = 20 + 'px';
            } else if (agePin.offsetLeft > ageLine.clientWidth) {
                agePin.style.left = ageLine.clientWidth + 'px';
            }
            console.log(10 + (agePin.style.left).slice(0, -2) + 'px');
            filterAge.style.left = 8 + Number((agePin.style.left).slice(0, -2)) + 'px'; /* чтобы добавить 10 к *.px */
            filterAge.textContent = Math.floor(Number((agePin.style.left).slice(0, -2)) / 12);  /* чтобы получить ровное число возраста */
        };

        var onMouseUp = function (upEvt) {
            upEvt.preventDefault();

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
    
    
})();