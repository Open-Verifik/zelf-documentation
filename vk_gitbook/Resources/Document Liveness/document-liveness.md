# Document Liveness

Document Liveness is Verifik's advanced fraud detection system that ensures the authenticity of identity documents by detecting various types of document manipulation and presentation attacks. It uses cutting-edge AI technology to identify fake, manipulated, or fraudulent documents in real-time, providing comprehensive protection against document fraud.

### **How Document Liveness Works**

Document Liveness analyzes uploaded document images through multiple specialized detection pipelines, each designed to identify specific types of fraud attempts. The system processes documents through AI-powered algorithms that examine various aspects of document authenticity, from screen replay attacks to sophisticated digital manipulations.

**What Document Liveness Detects**

Document Liveness provides comprehensive fraud detection across four critical areas of document security:

**Screen Replay Detection:**

* Identifies documents displayed on screens or monitors
* Detects attempts to present digital copies instead of physical documents
* Recognizes screen glare, pixelation, and digital display artifacts
* Prevents fraud from photos of documents on devices

**Printed Copy Detection:**

* Identifies photocopied or printed versions of documents
* Detects paper texture differences and print quality issues
* Recognizes scanning artifacts and reproduction patterns
* Prevents fraud from high-quality document reproductions

**Portrait Substitution Detection:**

* Identifies when photos on documents have been replaced
* Detects inconsistencies in photo placement and quality
* Recognizes tampering around portrait areas
* Prevents identity theft through photo replacement

**Digital Manipulation Detection:**

* Identifies digitally altered or edited documents
* Detects text modifications, date changes, and information tampering
* Recognizes advanced editing techniques and artifacts
* Prevents fraud from sophisticated document forgeries

### **Key Configuration Areas**

**Validation Selection:**

* **Screen Replay Validation**: Enable detection of screen-displayed documents
* **Printed Copy Validation**: Enable detection of photocopied documents
* **Portrait Substitution Validation**: Enable detection of photo replacements
* **Digital Manipulation Validation**: Enable detection of digital alterations

**Calibration Settings:**

* **Regular**: Standard sensitivity for most use cases
* **Soft**: Lower sensitivity, fewer false positives
* **Hard**: Higher sensitivity, maximum security

**Image Management:**

* **Save Image**: Option to store processed images for audit trails
* **Image URL**: Secure storage location for saved images
* **Document Quality**: Advanced quality validation controls

**Quality Controls:**

* **Ignore Cropped Validation**: Skip validation for cropped documents
* **Ignore Colorless Validation**: Skip validation for black and white documents
* **Image Quality Warnings**: Detailed feedback on image quality issues

#### **Detection Results & Scoring**

**Liveness Scores:**

* **Individual Scores**: Separate scores for each validation type (0-1 scale)
* **Probability Scores**: Fraud probability for each detection type
* **Aggregated Score**: Overall document authenticity score
* **Confidence Levels**: Reliability indicators for each detection

**Quality Feedback:**

* **Warnings**: Image quality issues that may affect accuracy
* **Errors**: Critical issues that prevent proper analysis
* **Recommendations**: Guidance for improving document capture
* **Detailed Results**: Comprehensive analysis breakdown

### **Getting Started**

1. **Select validation types** (screen replay, printed copy, portrait substitution, digital manipulation)
2. **Configure calibration settings** (regular, soft, or hard sensitivity)
3. **Set image storage preferences** (save images for audit trails)
4. **Upload document image** (base64 encoded image data)
5. **Review detection results** and fraud probability scores

**What Happens When You Process a Document**

1. **Image Upload**: Document image is securely received and validated
2. **Pipeline Selection**: Chosen validation types are activated
3. **AI Analysis**: Each pipeline analyzes the document for specific fraud types
4. **Score Calculation**: Individual and aggregated fraud probability scores are generated
5. **Results Storage**: Detection results and metadata are saved
6. **Response Delivery**: Comprehensive fraud analysis is returned

**Monitoring and Management**

* **Detection History**: Track all processed documents and their results
* **Fraud Analytics**: Monitor fraud attempt patterns and trends
* **Quality Metrics**: Analyze image quality and processing success rates
* **Audit Trails**: Maintain records for compliance and investigation

### **Pricing & Usage**

**Per-Pipeline Pricing:**

* **Base Cost**: $0.24 USD per pipeline processed
* **Multiple Pipelines**: Each validation type counts as one pipeline
* **Flexible Selection**: Pay only for the validations you need
* **Volume Discounts**: Available for high-volume usage

**Example Pricing:**

* Screen Replay only: $0.24 per document
* Screen Replay + Printed Copy: $0.48 per document
* All four validations: $0.96 per document
* Custom combinations: Priced per selected pipeline

### **Advanced Features**

**Calibration Control:**

* **Regular**: Balanced detection for general use cases
* **Soft**: Reduced false positives for challenging environments
* **Hard**: Maximum security for high-risk applications

**Quality Management:**

* **Image Quality Validation**: Automatic assessment of document image quality
* **Cropping Tolerance**: Flexible handling of partially cropped documents
* **Color Processing**: Support for both color and grayscale documents

**Integration Options:**

* **REST API**: Simple HTTP-based integration
* **Real-time Processing**: Immediate fraud detection results
* **Batch Processing**: Support for multiple document analysis
* **Webhook Support**: Automated result delivery

Document Liveness provides enterprise-grade document fraud detection, ensuring that only authentic, unmanipulated documents pass through your verification process. With its advanced AI technology and flexible configuration options, it adapts to your specific security requirements while maintaining high accuracy and user experience.
