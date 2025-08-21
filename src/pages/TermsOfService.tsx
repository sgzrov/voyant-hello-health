import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Voyant
        </Link>

        <div className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> Coming Soon
          </p>

          <div className="space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using Voyant, you agree to these Terms of Service. Voyant is a health companion app that provides AI-powered insights and should not replace professional medical advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Medical Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Voyant is not a medical device and does not provide medical diagnosis, treatment, or cure. Always consult with qualified healthcare professionals for medical concerns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">
                Users are responsible for providing accurate information and using the app responsibly. You should not rely solely on Voyant for health decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about these Terms of Service, please contact us at terms@voyant.health
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;