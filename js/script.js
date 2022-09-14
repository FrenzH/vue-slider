const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);

const app = new Vue(
  {
    el: '#app',
    data: {
        activeIndex: 0,
        slides,
        intervalId: undefined
    },
    /*
    created: function(){
        console.log('created!');
    },
    */
    mounted(){
        console.log('mounted!');
        this.createInterval();
    },

    methods:{
        createInterval(){
            this.intervalId = setInterval(this.showNextImage, 3000);
        },
        deleteInterval(){
            if(this.intervalId){
                clearInterval(this.intervalId);
            }
        },
        showPreviousImage: function(){
            if (this.activeIndex > 0){
                this.activeIndex--;
            }else{
                this.activeIndex = this.slides.length -1;
            }
        },
        showNextImage(){
            if (this.activeIndex === this.slides.length -1){
              //  this.activeIndex++;
                this.activeIndex = 0;
            }else{
                this.activeIndex++;
            }          
        },
        onNextClick(){
            this.showNextImage();
            this.deleteInterval();
            this.createInterval();
        },
        onPrevClick(){
            this.showPreviousImage();
            this.deleteInterval();
            this.createInterval();
        },


        selectImage(newActiveIndex){// 0 1 2 3 4
            console.log('indice immagine cliccata',newActiveIndex)
            console.log('indice immagine attiva',this.activeIndex)
            this.activeIndex = newActiveIndex;
        }
    }
  }  
);

