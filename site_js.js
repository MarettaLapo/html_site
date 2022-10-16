$(function(){
    $('.product__adding-plus').click(function(){
        var current_input =parseInt( $('.product__adding-input').val());
        $('.product__adding-input').val(current_input + 1);
        $('.product__adding-minus').css('color', 'black');
    });
    $('.product__adding-minus').click(function(){
        var current_input = parseInt($('.product__adding-input').val());
        if(current_input < 2){
            return false;
        }
        else{
            $('.product__adding-input').val(current_input - 1);
        }   
        if(current_input == 2){
            $('.product__adding-minus').css('color', '#D9D9D9');
        }    
    });
    $('.product__adding-input').change(function() {
        var current_input = parseInt($('.product__adding-input'));
        if(!current_input.val() || current_input.val() < 0){
            $('.product__adding-input').val('1');
        }
        else{
            $('.product__adding-input').val(Math.round(current_input.val()));
            if(current_input.val() == 1){
                $('.product__adding-minus').css('color', '#D9D9D9');
            } 
            else{
                $('.product__adding-minus').css('color', 'black');
            }
        }
    });
    $('.product__adding-button--blue').click(function(){
        var current_input = $('.product__adding-input').val();

        current_input == '1' ? $('.product__adding-button--blue').notify("В корзину добавлен " + current_input + " товар","info") 
        : current_input == '2' || current_input == '3' || current_input == '4' ? $('.product__adding-button--blue').notify("В корзину добавлено " + current_input + " товара","info")
        : $('.product__adding-button--blue').notify("В корзину добавлено " + current_input + " товаров","info");
        
    });
});