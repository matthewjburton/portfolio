import React from "react";

interface ModalProps {
    image: string;
    title: string;
    currentIndex: number;
    total: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, title, currentIndex, total, onClose, onPrev, onNext }) => {
    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-75" onClick={handleBackgroundClick} />
            <div className="relative flex items-center justify-center w-full h-full p-4">
                <button
                    className="absolute left-0 m-4 text-white text-3xl z-50"
                    onClick={onPrev}
                >
                    &lsaquo;
                </button>
                <button
                    className="absolute top-0 right-0 m-4 text-white text-3xl z-50"
                    onClick={onClose}
                >
                    &times;
                </button>
                <img
                    src={image}
                    alt={title}
                    className="object-contain max-w-full max-h-full"
                />
                <button
                    className="absolute right-0 m-4 text-white text-3xl z-50"
                    onClick={onNext}
                >
                    &rsaquo;
                </button>
                <div className="absolute bottom-0 m-4 text-white z-50">
                    {currentIndex + 1} / {total}
                </div>
            </div>
        </div>
    );
};

export default Modal;
