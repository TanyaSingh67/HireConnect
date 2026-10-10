const User=require("../models/User");
const jwt=require("jsonwebtoken");
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const generateToken=(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "60d"});
};

exports.register=async(req, res, next)=>{
    try{
        const {name, email, password, avatar, role}=req.body;
        const userExists=await User.findOne({email});
        if(userExists) return res.status(400).json({message:"User already exists"});
        const user = await User.create({name, email, password, role, avatar});
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar || "",
            role: user.role,
            token: generateToken(user._id),
            companyName: user.companyName || "",
            companyDescription: user.companyDescription || "",
            companyLogo: user.companyLogo || "",
            industry: user.industry || "",
            teamSize: user.teamSize || "",
            website: user.website || "",
            phone: user.phone || "",
            location: user.location || "",
            resume: user.resume || "",
            title: user.title || "",
            bio: user.bio || "",
            skills: user.skills || "",
            experience: user.experience || "",
            githubUrl: user.githubUrl || "",
            portfolioUrl: user.portfolioUrl || ""
        });
    }catch(err){
        next(err);
    }
};

exports.login=async(req, res, next)=>{
    try{
        const {email, password}=req.body;
        const user=await User.findOne({email});
        if(!user || !(await user.matchPassword(password))) return res.status(401).json({message:"Invalid email or password"});
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
            avatar: user.avatar || "",
            companyName: user.companyName || "",
            companyDescription: user.companyDescription || "",
            companyLogo: user.companyLogo || "",
            industry: user.industry || "",
            teamSize: user.teamSize || "",
            website: user.website || "",
            phone: user.phone || "",
            location: user.location || "",
            resume: user.resume || "",
            title: user.title || "",
            bio: user.bio || "",
            skills: user.skills || "",
            experience: user.experience || "",
            githubUrl: user.githubUrl || "",
            portfolioUrl: user.portfolioUrl || ""
        });
    }catch(err){
        next(err);
    }

};

exports.getMe=async(req,res)=>{
    res.json(req.user);
};

// FORGOT PASSWORD
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found with this email" });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000; // 15 mins

    await user.save();

    const resetUrl = `http://localhost:5173/reset-password/${resetToken}`;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Password Reset Request',
      text: `Aapne password reset ke liye request ki hai. Link par click karein: \n\n ${resetUrl}`,
    });

    res.status(200).json({ success: true, message: "Reset email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// RESET PASSWORD
exports.resetPassword = async (req, res) => {
  try {
    const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired reset token" });
    }

    user.password = req.body.password; // Agar model me pre-save hook hai jo hash karta hai
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.status(200).json({ success: true, message: "Password updated successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};