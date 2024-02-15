import { products } from './data/products.js'

function itemList(userItems) {
  const items = userItems
  // initalPage() adding filterItemsHandler() function to `<input type="text" />` with event 'input'. Then calling showItems() function to show list of all items as default when firstly loading page.
  const initialPage = () => {
    const inputElement = document.querySelector('input')
    // console.log(inputElement)
    inputElement.addEventListener('input', filterItemsHandler)
    showItems(items)
  }
  // filterItemsHandler() filtering an array of items that contains user’s keywords with case insensitive. Then calling showItems() function by sending filtered array as parameter.

  const filterItemsHandler = (event) => {
    // console.log(event.target)
    // console.log(event.target.value)
    const userKeywords = event.target.value.toLowerCase()
    const filterItems = items.filter((item) =>
      item.keywords.toLowerCase().includes(userKeywords)
    )
    showItems(filterItems)
  }
  // showItems(_items) accepting array of items and show them dynamically. You must remove previous ’s item list. Then creating `<li>` elements for each single item under `<ul id="items"></ul>`. Each `<li>` element contains a text content `'ID:product id, NAME:product name, KEYWORDS:product keywords’` . for example, `'ID:GGOEAFKA087499, NAME:Android Small Removable  Sticker Sheet', KEYWORDS:Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet, android small sticker sheets, Android Sheet'`.
  const showItems = (items) => {
    //query ul element
    const ulElement = document.getElementById('items')
    //remove ul children
    ulElement.textContent = ''
    //create li elements
    items.forEach((item) => {
      const liElement = document.createElement('li')
      liElement.textContent = `ID:${item.id}, NAME:${item.name}, KEYWORDS:${item.keywords}`
      ulElement.appendChild(liElement)
    })
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}

export { itemList }
const { initialPage } = itemList(products)
initialPage()

// #ข้อกำหนดรายการสินค้า

// กำหนดฟังก์ชัน _itemList(userItems)_ ที่มีตัวแปรคงที่หนึ่งตัวแปรและฟังก์ชันที่ซ้อนกันสามฟังก์ชันเพื่อกรองผลิตภัณฑ์ คุณต้องเขียนฟังก์ชันที่ซ้อนกันสามฟังก์ชันเพื่อให้ทำงานเมื่อผู้ใช้ป้อนคำหลัก รายการของคุณจะต้องเปลี่ยนแปลงแบบไดนามิกตามค่าคำหลักของผู้ใช้

// ### ตัวแปรคงที่:

// - **items**: กำหนดพารามิเตอร์ userItems ให้กับไอเท็มเริ่มต้น

// ### ฟังก์ชันที่ซ้อนกัน:

// - **initialPage()** เพิ่มฟังก์ชัน _filterItemsHandler()_ ให้กับ `<input type="text" />` พร้อมด้วยเหตุการณ์ 'input' จากนั้นเรียกใช้ฟังก์ชัน _showItems()_ เพื่อแสดงรายการของรายการทั้งหมดเป็นค่าเริ่มต้นเมื่อโหลดหน้าครั้งแรก

// - **filterItemsHandler()** กรองอาร์เรย์ของรายการที่มีคำหลักของผู้ใช้โดยไม่คำนึงถึงตัวพิมพ์เล็กและใหญ่ จากนั้นเรียกใช้ฟังก์ชัน _showItems()_ โดยส่งอาร์เรย์ที่กรองแล้วเป็นพารามิเตอร์

// - **showItems(_items_)** ยอมรับอาร์เรย์ของรายการและแสดงแบบไดนามิก คุณต้องลบรายการสินค้าก่อนหน้า จากนั้นสร้างองค์ประกอบ `<li>` สำหรับแต่ละรายการภายใต้ `<ul id="items"></ul>` แต่ละองค์ประกอบ `<li>` มีเนื้อหาข้อความ `'ID:รหัสผลิตภัณฑ์, NAME:ชื่อผลิตภัณฑ์, คีย์เวิร์ด:คำหลักของผลิตภัณฑ์''
//    - ตัวอย่างเช่น `'ID:GGOEAFKA087499, NAME:แผ่นสติกเกอร์แบบถอดได้ขนาดเล็กของ Android', คีย์เวิร์ด:แผ่นสติกเกอร์แบบถอดได้ขนาดเล็กของ Android, สติ๊กเกอร์ Android, แผ่นสติกเกอร์, แผ่นสติกเกอร์แบบถอดได้, แผ่นสติกเกอร์ขนาดเล็ก, แผ่นสติกเกอร์ขนาดเล็กของ Android, ชีต Android'' .
//    - โปรดทราบว่ามีช่องว่างหนึ่งช่องหลังเครื่องหมายจุลภาค (,) ระหว่าง ID, NAME และ KEYWORDS