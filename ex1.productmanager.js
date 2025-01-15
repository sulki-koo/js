/*
    [자바스크립트 실습 : 상품관리]

    - 기능 : 상품목록, 상품등록, 상품상세, 상품수정, 상품삭제
    - 상품정보 : 상품번호, 제조사명, 상품명, 상품수량, 상품가격
    - TODO
        1. 상품정보 객체화 (또는 배열)
        2. 기능 함수화
        3. 기능 테스트
*/
//pRegister
let productList = [];

function product(pno, manufacturer, product, quantity, price){
    this.pno = pno;
    this.manufacturer = manufacturer;
    this.product = product;
    this.quantity = quantity;
    this.price = price;
};

function productManager(){
    this.printList = function() {
        productList.forEach(ele => { console.log(
            '상품번호:'+ele.pno,
            '제조사명:'+ele.manufacturer,
            '상품명:'+ele.product,
            '상품수량:'+ele.quantity,
            '상품가격:'+ele.price
            );
        })
    },

    // this.pRegister = function(pno, manufacturer, product, quantity, price){
    //     this.plist.push({pno:pno, manufacturer: manufacturer
    //         , product: product, quantity: quantity, price: price});
    // };

    this.pRegister = function(product){
        productList.push(product);
    },

    this.pDetails = function(pno){
        productList.filter( ele => { 
            return ele.pno == pno; 
        }).forEach( ele => console.log(ele) );
    },
    
    this.pModify = function(product){
        productList = productList.map(
            prod => {
                if (prod.pno==product.pno) {
                    return product;
                } else {
                    return prod;
                }
            }
        );
    },
    
    this.pDelete = function(pno){
        productList.splice(pno-1,1);
    }
};

const productManager1 = new productManager();

productManager1.pRegister(new product(1, '삼양식품', '삼양라면', '5', 3000));
productManager1.pRegister(new product(2, '농심', '신라면', '5', 4000));
productManager1.pRegister(new product(3, '오뚜기', '크림스프', '1', 2000));
productManager1.pRegister(new product(4, '농심', '너구리', '5', 3500));
productManager1.pRegister(new product(5, '서울우유', '우유', '1', 1500));
productManager1.pRegister(new product(6,'코카콜라음료','조지아','2',2700));
productManager1.pDetails(5);
productManager1.pModify(new product(5,'해태','오예스','12', 2500));
productManager1.pDelete(6);
productManager1.printList();
