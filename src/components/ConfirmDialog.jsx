import { motion } from "motion/react"

export default function ConfirmDialog({title, message, onConfirm, onCancel, confirmText = "Confirm", cancelText = "Cancel", isDangerous = false}) {
  return (
    <motion.div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'
      onClick={onCancel}
      initial={{opacity: 0}}
      animate={{opacity: 1}}>
      <motion.div className='bg-white rounded-2xl p-6 max-w-sm shadow-2xl'
        onClick={(e) => e.stopPropagation()}
        initial={{scale: 0.9}}
        animate={{scale: 1}}>
        <h3 className='text-xl font-bold mb-2 text-gray-800'>{title}</h3>
        <p className='text-gray-600 mb-6'>{message}</p>
        <div className='flex gap-3'>
          <button onClick={onCancel} className='flex-1 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 font-medium text-gray-700 transition'>
            {cancelText}
          </button>
          <button onClick={onConfirm} className={`flex-1 py-2 rounded-lg text-white font-medium transition ${isDangerous ? 'bg-red-600 hover:bg-red-700' : 'bg-black hover:bg-gray-900'}`}>
            {confirmText}
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
