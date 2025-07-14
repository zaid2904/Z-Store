import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../Auth/firebase";
import QrCode from "./QrCode.png";
import GooglePlay from "./GooglePlay.png";
import AppStore from "./AppStore.png";
import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-100 relative overflow-hidden border-t border-slate-800">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto container-padding py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="space-y-3">
                <h3 className="text-2xl font-bold gradient-text-primary">
                  Z-Store
                </h3>
                <p className="text-lg font-semibold text-slate-200">
                  {i18n.t("footer.subscribe")}
                </p>
                <p className="text-secondary max-w-md leading-relaxed">
                  {i18n.t("footer.offer")}
                </p>
              </div>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
                <div className="flex max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-l-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="btn-primary rounded-l-none">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-secondary">
                  Get 20% off your first order with email signup
                </p>
              </div>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-slate-100 mb-6">
                {i18n.t("footer.support")}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-blue-400 transition-colors duration-200 block py-1"
                  >
                    {i18n.t("footer.supportLinks.help")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-blue-400 transition-colors duration-200 block py-1"
                  >
                    {i18n.t("footer.supportLinks.returns")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-blue-400 transition-colors duration-200 block py-1"
                  >
                    {i18n.t("footer.supportLinks.contact")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-blue-400 transition-colors duration-200 block py-1"
                  >
                    {i18n.t("footer.supportLinks.shipping")}
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Account */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-slate-100 mb-6">
                {i18n.t("footer.account")}
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/account"
                    onClick={scrollToTop}
                    className="text-secondary hover:text-blue-400 transition-colors duration-200 block py-1"
                  >
                    {i18n.t("footer.accountLinks.profile")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    onClick={scrollToTop}
                    className="text-secondary hover:text-blue-400 transition-colors duration-200 block py-1"
                  >
                    {i18n.t("footer.accountLinks.login")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/wishlist"
                    onClick={scrollToTop}
                    className="text-secondary hover:text-blue-400 transition-colors duration-200 block py-1"
                  >
                    {i18n.t("footer.accountLinks.wishlist")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    onClick={scrollToTop}
                    className="text-secondary hover:text-blue-400 transition-colors duration-200 block py-1"
                  >
                    {i18n.t("footer.accountLinks.cart")}
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-slate-100 mb-6">
                {i18n.t("footer.quickLinks")}
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about"
                    onClick={scrollToTop}
                    className="text-secondary hover:text-blue-400 transition-colors duration-200 block py-1"
                  >
                    {i18n.t("footer.quickLinksItems.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={scrollToTop}
                    className="text-secondary hover:text-blue-400 transition-colors duration-200 block py-1"
                  >
                    {i18n.t("footer.quickLinksItems.contact")}
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-blue-400 transition-colors duration-200 block py-1"
                  >
                    {i18n.t("footer.quickLinksItems.privacy")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-blue-400 transition-colors duration-200 block py-1"
                  >
                    {i18n.t("footer.quickLinksItems.terms")}
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Download App Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-slate-800"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="text-center sm:text-left">
                  <h4 className="text-lg font-semibold text-slate-100 mb-2">
                    {i18n.t("footer.downloadApp")}
                  </h4>
                  <p className="text-secondary text-sm">
                    {i18n.t("footer.saveMessage")}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={QrCode}
                    alt="QR Code"
                    className="w-16 h-16 rounded-lg border border-slate-700"
                  />
                  <div className="space-y-2">
                    <img
                      src={GooglePlay}
                      alt="Google Play"
                      className="h-10 hover:scale-105 transition-transform duration-200 cursor-pointer"
                    />
                    <img
                      src={AppStore}
                      alt="App Store"
                      className="h-10 hover:scale-105 transition-transform duration-200 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-secondary text-sm mr-2">Follow us:</span>
                {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-slate-400 hover:bg-white transition-colors duration-200"></div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-slate-800 text-center"
          >
            <p className="text-secondary text-sm">
              © 2024 Z-Store. All rights reserved. Built with passion for modern e-commerce.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
