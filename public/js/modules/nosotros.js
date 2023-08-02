
console.warn('🆗: Módulo PageNosotros cargado.');

class PageNosotros {

    static async init () {
        console.log('PageNosotros.init()');
        console.log('.');
        console.log('..');
        console.log('...');        
    
        function getAccordion(){

            const title = document.querySelectorAll('.h3-title'); 
            
            const  h3Content = document.querySelectorAll('.div-questions');
            
        for (let i=0;i<h3Content.length;i++){
            title[i].addEventListener('click', function () 
            {
                h3Content[i].classList.toggle('div-questions');
                h3Content[i].classList.toggle('h3-title-open');
            }
            );
        };
        }
    
        getAccordion();
    }



}

export default PageNosotros;
