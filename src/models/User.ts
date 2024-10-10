import mongoose, { Schema, model, models, Document } from 'mongoose';

// เชื่อมต่อ MongoDB
const uri = process.env.MONGODB_URI;
mongoose.connect(uri as string)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Connection failed:', err));

// สร้าง interface สำหรับ TypeScript
interface IUser extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

// สร้าง Schema สำหรับ User
const userSchema: Schema<IUser> = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email address',
    ],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^\d{10,15}$/, 'Please enter a valid phone number'],
  },
}, { timestamps: true });

// ตรวจสอบว่าโมเดล 'User' มีอยู่ใน mongoose หรือไม่ ถ้าไม่มีก็จะสร้างใหม่
const User = models.User || model<IUser>('User', userSchema);

export default User;

// ฟังก์ชันการบันทึกผู้ใช้ใหม่
const createUser = async () => {
  const newUser = new User({
    email: 'test@example.com',
    password: 'password123',
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '1234567890',
  });

  await newUser.save()
    .then(() => console.log('User created successfully'))
    .catch((err: any) => console.error('Error creating user:', err));
};

createUser();
