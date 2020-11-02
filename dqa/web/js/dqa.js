require(
    [
    'jquery',
    // 'mega/dropdowns'
    ],
    function($) {
      $("#product-addtocart-button").on('click',function(){
        if(confirm("HIHIHIHIHIHIHI MUON THEM PRODUCT KHONG BAN?")) {
            $("#product_addtocart_form").submit();
        }
      });
      $('.magento__dropdown-widget').dropdown();
    }
    );
