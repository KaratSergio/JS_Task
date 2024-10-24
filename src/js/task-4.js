//*Queue FIFO (First In First Out)

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }

  peek() {
    return this.elements[this.head];
  }

  get length() {
    return this.tail - this.head;
  }

  get isEmpty() {
    return this.length === 0;
  }
}

const q = new Queue();

q.enqueue('a');
q.enqueue('b');
q.enqueue('c');

// console.log(q.elements);
// [LOG] Object { "0": "a", "1": "b", "2": "c" }

q.dequeue();

// console.log(q.elements);
// [LOG] Object { "1": "b", "2": "c" }

class Client {
  constructor(name) {
    this.name = name;
    this.operations = Math.floor(Math.random() * 5) + 1;
    this.serviceTime = this.operations * 1000;
  }
}

class Bank {
  constructor() {
    this.clients = new Queue();
    this.totalServiceTime = 0;
  }

  newClient(client) {
    this.clients.enqueue(client);
  }

  async serveClients() {
    while (!this.clients.isEmpty) {
      const currentClient = this.clients.dequeue();

      console.log(
        `Обслуговуємо клієнта ${currentClient.name} з ${currentClient.operations} операцій`
      );

      this.totalServiceTime += currentClient.serviceTime;
      await new Promise(resolve =>
        setTimeout(resolve, currentClient.serviceTime)
      );

      console.log(`Клієнта ${currentClient.name} обслуговано.`);
    }
    console.log(
      `Всі клієнти обслуговані. Загальний час обслуговування: ${
        this.totalServiceTime / 1000
      } секунд.`
    );
  }
}

const bank = new Bank();

for (let i = 0; i < 5; i++) {
  bank.newClient(new Client(`Client-${i}`));
}

// bank.serveClients();

// Result:

// [LOG] "Обслуговуємо клієнта Client-0 з 1 операцій"
// [LOG] "Клієнта Client-0 обслуговано."
// [LOG] "Обслуговуємо клієнта Client-1 з 3 операцій"
// [LOG] "Клієнта Client-1 обслуговано."
// [LOG] "Обслуговуємо клієнта Client-2 з 3 операцій"
// [LOG] "Клієнта Client-2 обслуговано."
// [LOG] "Обслуговуємо клієнта Client-3 з 5 операцій"
// [LOG] "Клієнта Client-3 обслуговано."
// [LOG] "Обслуговуємо клієнта Client-4 з 1 операцій"
// [LOG] "Клієнта Client-4 обслуговано."
// [LOG] "Всі клієнти обслуговані. Загальний час обслуговування: 13 секунд."
